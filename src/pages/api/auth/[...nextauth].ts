import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { apiClient } from '../../../common/data/apiClient';
import { JSONArray, UserDto } from '../../../common/data/types/types';

const nextEndpoint = process.env.NEXTAUTH_URL;

type UserCredentialProps = {
  token: any;
  user?: any;
  account?: JSONArray;
  session: any;
};

type ReqResProps = {
  req: any;
  res: any;
};

const options = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const payload = {
          email: credentials?.email,
          password: credentials?.password,
        };

        const res = await fetch(`${apiClient}auth/login`, {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const user = await res.json();

        if (!res.ok) {
          throw new Error('wrong username or password');
        }

        if (res.ok && user) {
          return user;
        }

        return null;
      },
    }),
  ],
  session: {
    jwt: true,
  },
  jwt: {
    secret:
      'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1MjYxNzk4NiwiaWF0IjoxNjUyNjE3OTg2fQ.q_Fo9GoBO2xKZZiJ_W1J4hw3PS5UACCkkG9fRTuAuv8',
  },
  callbacks: {
    async jwt({ token, user, account }: UserCredentialProps) {
      if (account && user) {
        return {
          ...token,
          accessToken: user.data.token,
          refreshToken: user.data.refresh_token,
        };
      }

      return token;
    },

    async session({ session, token }: UserCredentialProps) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;

      return session;
    },
  },
  pages: {
    loginRegistration: '/signin-signup',
  },
};

export default (req, res) => NextAuth(req, res, options);

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. 'Sign in with...')
//       name: 'Credentials',
//       // The credentials is used to generate a suitable form on the sign in page.
//       // You can specify whatever fields you are expecting to be submitted.
//       // e.g. domain, username, password, 2FA token, etc.
//       // You can pass any HTML attribute to the <input> tag through the object.
//       credentials: {
//         username: { label: 'Email', type: 'email' },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials, req) {
//         // You need to provide your own logic here that takes the credentials
//         // submitted and returns either a object representing a user or value
//         // that is false/null if the credentials are invalid.
//         // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
//         // You can also use the `req` object to obtain additional parameters
//         // (i.e., the request IP address)
//         const res = await fetch('http://localhost:3000/', {
//           method: 'POST',
//           body: JSON.stringify(credentials),
//           headers: { 'Content-Type': 'application/json' },
//         });
//         const user = await res.json();

//         // If no error and we have user data, return it
//         if (res.ok && user) {
//           return user;
//         }
//         // Return null if user data could not be retrieved
//         return null;
//       },
//     }),
//   ],
// });
