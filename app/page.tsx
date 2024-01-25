import WebsiteScreen from '@/lib/components/website-screen';
import { COURSE_WELCOME_TEXT } from '@/lib/config';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <WebsiteScreen>
      <div className="grid">
        <div className="center padding-2 text-xl">
          <span>
            {COURSE_WELCOME_TEXT}
          </span>
        </div>
        <div className="center padding-2">
          <Image
            src="/huji.png"
            alt="HUJI Logo"
            width={320}
            height={100}
            priority
          />
        </div>
        <div className="center padding-2">
          <Image
            src="/bezalel.png"
            alt="Bezalel Logo"
            className="item"
            width={320}
            height={100}
            priority
          />
        </div>
        <div>
          <h1 className="center text-xxxl">
            Lorem Ipsum
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus sit amet nunc nec vehicula. Fusce ornare nec nulla non imperdiet. Fusce vel sodales justo. Sed efficitur arcu lorem, at iaculis odio ultricies et. Duis rutrum urna nec elit bibendum, sed hendrerit nulla posuere. Vestibulum vestibulum, ante non tincidunt posuere, dui arcu lacinia nisl, nec rhoncus massa arcu ac ipsum. Nam congue interdum tortor, eu dignissim massa scelerisque vitae. Sed ultricies bibendum congue. Praesent non magna id ligula maximus luctus. Donec vitae nibh quis neque luctus sagittis et eget nunc. Aliquam id ullamcorper lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur tempor quis dolor a lacinia.
          </p>
          <ul>
            <li>Aliquam maximus tellus sed lacus venenatis, ac cursus eros mollis.</li>
            <li>In id ante sed sem pharetra molestie et vitae arcu.</li>
            <li>Cras pharetra turpis at pretium elementum.</li>
            <li>Donec ultrices felis vel lectus auctor iaculis.</li>
          </ul>
          <p>
            See our <Link target="_blank" href="https://github.com/digital-product-jam-2024/course/tree/main/reference">Reference Material</Link> on <Link target="_blank" href="https://github.com/digital-product-jam-2024/course/blob/main/reference/html.md">HTML</Link>, <Link target="_blank" href="https://github.com/digital-product-jam-2024/course/blob/main/reference/css.md">CSS</Link>, and <Link target="_blank" href="https://github.com/digital-product-jam-2024/course/blob/main/reference/javascript.md">JavaScript</Link>.
          </p>
        </div>
      </div>
    </WebsiteScreen>
  )
}
