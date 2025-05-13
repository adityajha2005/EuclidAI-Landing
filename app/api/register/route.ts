import { MongoClient } from "mongodb"
import { type NextRequest, NextResponse } from "next/server"

const uri = process.env.MONGODB_URI
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local")
}

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json()

    if (!email || !email.includes("@") || !name || name.trim() === "") {
      return NextResponse.json({ error: "Invalid email or name" }, { status: 400 })
    }

    let client

    try {
      client = await MongoClient.connect(uri as string, options as any)
      const db = client.db("euclidAI")
      const collection = db.collection("users")

      const existing = await collection.findOne({ email })
      if (existing) {
        return NextResponse.json({ message: "Email already registered" }, { status: 409 })
      }

      await collection.insertOne({
        name: name.trim(),
        email: email.toLowerCase().trim(),
        createdAt: new Date(),
      })

      return NextResponse.json({ message: "Email registered successfully" }, { status: 200 })
    } catch (error) {
      console.error("Registration Error:", error)
      return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    } finally {
      if (client) {
        await client.close()
      }
    }
  } catch (error) {
    console.error("Request parsing error:", error)
    return NextResponse.json({ error: "Invalid request format" }, { status: 400 })
  }
}
