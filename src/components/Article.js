import { format } from "date-fns"
import './Navbar'

export default function Article({ id, urls, user, created_at, likes, darkMode }) {
  const articleBgColor = darkMode ? 'bg-gray-900' : 'bg-white';
  const articleTextColor = darkMode ? 'text-white' : 'text-slate-800';

  return (
    <>
      <div className={`p-5 rounded-3xl shadow-md ${articleBgColor}`}>
        <article key={id} className="rounded-3xl">
          <img
            src={urls.regular}
            alt={user.username}
            className="h-52 object-fit object-cover w-full lg:h-80 rounded-3xl"
          />

          <div className={`p-5 pb-0 flex flex-col md:flex-row items-start md:items-center justify-between ${articleTextColor}`}>
            <article className="flex items-center justify-start">
              <img
                src={user.profile_image.medium}
                alt={user.username}
                className="rounded-full mr-2 w-10 md:w-auto"
              />
              <ul>
                <li className="font-bold">{user.name}</li>
                <li className="text-sm opacity-75">
                  {format(new Date(created_at), "dd MMMM yyyy")}
                </li>
              </ul>
            </article>

            <article className="mt-5 md:mt-0">
              <a
                href={`https://instagram.com/${user.instagram_username}`}
                className="text-sm opacity-75 underline"
                target="_blank"
                rel="noreferrer"
              >
                {user.instagram_username}
              </a>
              <small className="opacity-75 block">
                {likes} Likes
              </small>
            </article>
          </div>
        </article>
      </div>
    </>
  )
}
