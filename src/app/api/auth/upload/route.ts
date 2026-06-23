import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import cloudinary from "@/lib/cloudinary"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const formData = await req.formData()
  const file = formData.get("file") as File
  const buffer = Buffer.from(await file.arrayBuffer())

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result = await new Promise<any>((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { resource_type: "auto", folder: "user-files" },
      (err, res) => err ? reject(err) : resolve(res)
    ).end(buffer)
  })


  const saved = await prisma.file.create({
    data: {
      userId: session.user.id,
      name: file.name,
      url: result.secure_url,
      publicId: result.public_id,
      type: file.type,
      size: file.size,
    }
  })

  return NextResponse.json(saved)
}