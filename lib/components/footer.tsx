import { COURSE_CREDITS } from '@/lib/config';
import { AuthAction } from './auth';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="center">
          This is some example footer content.
        </div>
        <div className="center">
          <AuthAction />
        </div>
        <div className="center text-sm">
          {COURSE_CREDITS}
        </div>
      </div>
    </footer>
  )
}
