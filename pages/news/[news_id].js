import { useRouter } from "next/router";

//domain.com/news/[newsid]

function news() {
  //get access to dynaminc root

  const router = useRouter();
  //here we can use the identifire as an  object dirctly
  const news_id = router.query.news_id;
  //from there we can fitch our data by any DB api
  // send a request to the BE API
  // --- Do Something --

  return <h2>post num: {news_id}</h2>;
}

export default news;
