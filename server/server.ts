import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Initial users
const users = [
    {
        id: '42353',
        userName: "Razz",
        email: "razMelqonyan@gmail.com",
        message: 'This is a really good app bro, well done'
    },
    {
        id: '67534',
        userName: "Gegham",
        email: "geghamArevshatyan@gmail.com",
        message: 'Another cool project bro',
    }
]


const typeDefs = `#graphql
    type Query {
        getUsers: [User]
        getUserById(id: ID): User
    }

    type Mutation {
        createUser(userName: String!, email: String!, message: String!): User
    }

    type User {
        id: ID
        userName: String
        email: String
        message: String
    }
`;

const resolvers = {
    Query: {
        getUsers: () => users,
        getUserById: (parent: any, args: any) => {
            const id = args.id;
            return users.find((user) => user.id === id);
        },
    },
    Mutation: {
        createUser: (parent: any, args: any) => {
            const { userName, email, message } = args;
            const newUser = {
                id: crypto.randomUUID().toString(),
                userName,
                email,
                message,
            };
            users.push(newUser);
            return newUser;
        }
    }
};


const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);