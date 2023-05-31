import type { FindUserById } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import { timeTag } from 'src/lib/formatters'

interface Props {
  user: NonNullable<FindUserById['user']>
}

const User = ({ user }: Props) => {
  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            User {user.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{user.id}</td>
            </tr>
            <tr>
              <th>Group</th>
              <td>{user.group}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(user.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editUser({ id: user.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
      </nav>
    </>
  )
}

export default User
