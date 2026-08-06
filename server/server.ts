import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import express from "express";
import cors from "cors";
import { z } from "zod";
import { getJobsPage } from "../src/lib/api/jobs";

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

const contactSchema = z.object({
    name: z.string().min(1).max(120),
    email: z.string().email().max(200),
    message: z.string().min(1).max(4000),
});

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/jobs", async (req, res) => {
    const page = Math.max(1, Number(req.query.page ?? "1") || 1);
    const search = typeof req.query.search === "string" ? req.query.search : undefined;
    const remoteOnly = req.query.remoteOnly === "true";

    try {
        const data = await getJobsPage({ page, search, remoteOnly });
        res.json(data);
    } catch (err) {
        console.error("Failed to fetch jobs:", err);
        res.status(500).json({ message: "Failed to fetch jobs." });
    }
});

app.post("/api/contact", (req, res) => {
    const parsed = contactSchema.safeParse(req.body);
    if (!parsed.success) {
        res.status(400).json({
            error: "Please fill in all fields with valid values.",
            details: parsed.error.flatten().fieldErrors,
        });
        return;
    }

    // nodemailer SMTP sending is not configured yet (was also disabled in the
    // original Next route). Re-enable with a real transport to send mail.
    res.json({ ok: true });
});

app.listen(4001, () => {
    console.log(`🚀 API server ready at http://localhost:4001`);
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀 GraphQL server ready at ${url}`);
