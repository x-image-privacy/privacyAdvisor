import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

import { hashPassword } from '@redwoodjs/auth-dbauth-api'

import { NUMBER_OF_IMAGE } from '$web/config/constants'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    // const data: Prisma.UserCreateArgs['data'][] = [
    // To try this example data with the UserExample model in schema.prisma,
    // uncomment the lines below and run 'yarn rw prisma migrate dev'
    //
    // { name: 'alice', email: 'alice@example.com' },
    // { name: 'mark', email: 'mark@example.com' },
    // { name: 'jackie', email: 'jackie@example.com' },
    // { name: 'bob', email: 'bob@example.com' },
    // ]
    // console.log(
    //   "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    // )

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    // Promise.all(
    //
    // Change to match your data model and seeding needs
    //
    //   data.map(async (data: Prisma.UserExampleCreateArgs['data']) => {
    //     const record = await db.userExample.create({ data })
    //     console.log(record)
    //   })
    // )

    // If using dbAuth and seeding users, you'll need to add a `hashedPassword`
    // and associated `salt` to their record. Here's how to create them using
    // the same algorithm that dbAuth uses internally:

    const users = [
      { username: 'bruce', password: 'willis' },
      // { username: 'jane', password: 'secret2' },
    ]

    for (const user of users) {
      const [hashedPassword, salt] = hashPassword(user.password)
      await db.user.create({
        data: {
          username: user.username,
          hashedPassword,
          salt,
        },
      })
    }

    const imageData: Prisma.ImageCreateArgs['data'][] = Array.from(
      Array(NUMBER_OF_IMAGE)
    ).map((_, idx) => ({
      imageNumber: idx + 1,
      imageLocation: `/images/img_${idx + 1}.jpg`,
      dataLocation: `/word-data/img_${idx + 1}.json`,
    }))

    await db.image.createMany({ data: imageData })
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
