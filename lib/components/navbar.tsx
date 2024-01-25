import Link from 'next/link';
import { APP_NAME, COURSE_GITHUB, DEMOS_ENABLED } from '../config';

export default function Navbar() {
  return (
    <div id="navbar">
      <div className="container">
        <div className="app-name align-center">
          <Link href="/">{APP_NAME}</Link>
        </div>
        <div className="align-center flex-end">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href={COURSE_GITHUB} target="_blank">GitHub</Link></li>
            {DEMOS_ENABLED ? <li><Link href="/demos">Demos</Link></li> : null}
          </ul>
        </div>
      </div>
    </div>
  )
}
