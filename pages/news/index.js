// domain.com/news

import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return(
  <Fragment>
    Header Component [user prefs -- mylogo -- search bar]
    <h2>here will be list of news</h2>
    News list
    <ul>
      <li>
        <Link href="news/testfirst">first post</Link>
      </li>
      <li>2-th post</li>
    </ul>
    ddfooter Component
  </Fragment>
  )
}

export default NewsPage;
