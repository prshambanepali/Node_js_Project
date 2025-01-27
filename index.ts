import { PrismaClient } from '@prisma/client'
const prisma=new PrismaClient();
// async function main() {
  // await prisma.user.create({
  //   data: {
  //     id: "KCE079BCT001",
  //     fullName: "Ram",
  //     email: "Ram12@gmail.com",
  //     password: "001",
  //     gender: "Male"
  //   },
  // })
// }
async function main() {
  // ... you will write your Prisma Client queries here
  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })