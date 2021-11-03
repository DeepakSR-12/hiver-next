import axios from "axios";
import { useEffect, useState } from "react";
import NewsDetail from "./NewsDetail";

const News = () => {
  const [content, setContent] = useState([]);
  const [search, setSearch] = useState("");

  // default news content array - search string - q = america
  const contentArray = [
    {
      source: {
        id: null,
        name: "Blogspot.com",
      },
      source_id: "Blogspot.com",
      author: "noreply@blogger.com (Unknown)",
      title: "Stan Lee's First Superhero Became a Bloodthirsty Captain America",
      description:
        "Long before characters such as John Walker took inspiration from Captain America, Stan Lee's first superhero was a Cap pastiche named Destroyer. Though the character did enjoy a brief time in the spotlight of Marvel's early heroes, he quickly faded into obscu…",
      url: "https://techncruncher.blogspot.com/2021/10/stan-lees-first-superhero-became.html",
      urlToImage:
        "https://lh4.googleusercontent.com/proxy/0CnBHxb9chPCfSdy2gBD-h-kuBs6-xTENTHZIYRmE5ibouQP6gnwOrvd-PE80fD60vjx0d56ewW0k1WVdJVfJZ4dBhE-TDOqXzpIzZ2h6xoLtzRoEQHEwuBIMnIMxY1J-SrvIeXDXRupeLSRQHjhZEaTZdC-QM2ZUg-f=w1200-h630-p-k-no-nu",
      image_url:
        "https://lh4.googleusercontent.com/proxy/0CnBHxb9chPCfSdy2gBD-h-kuBs6-xTENTHZIYRmE5ibouQP6gnwOrvd-PE80fD60vjx0d56ewW0k1WVdJVfJZ4dBhE-TDOqXzpIzZ2h6xoLtzRoEQHEwuBIMnIMxY1J-SrvIeXDXRupeLSRQHjhZEaTZdC-QM2ZUg-f=w1200-h630-p-k-no-nu",
      publishedAt: "2021-10-03T19:21:00Z",
      pubDate: "2021-10-03T19:21:00Z",
      content:
        "Long before characters such as John Walker took inspiration from Captain America, Stan Lee's first superhero was a Cap pastiche named Destroyer. Though the character did enjoy a brief time in the spo… [+3260 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      source_id: "Wired",
      author: "Gabriel Solis",
      title: "Oh, This Game Set in Latin America Has a Coup? How Original",
      description:
        "From '80s arcade titles to 'Far Cry 6,' video games have rehashed the same stereotypes of regimes and corruption.",
      url: "https://www.wired.com/story/games-set-in-latin-america/",
      link: "https://www.wired.com/story/games-set-in-latin-america/",
      urlToImage:
        "https://media.wired.com/photos/6160775579ac4f82ee691579/191:100/w_1280,c_limit/Games-Far-Cry-6-2.jpg",
      image_url:
        "https://media.wired.com/photos/6160775579ac4f82ee691579/191:100/w_1280,c_limit/Games-Far-Cry-6-2.jpg",
      publishedAt: "2021-10-29T12:00:00Z",
      pubDate: "2021-10-29T12:00:00Z",
      content:
        "I think that the theme of US intervention in Latin America, whether in the form of political intervention to overthrow a dictator or covert drug intervention, is one of the most typical ways that Lat… [+3373 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      source_id: "CNN",
      author: null,
      title: "Chinese immigrants were targeted in 19th century America",
      description:
        '"This is Life with Lisa Ling" examines little known historical events that have impacted American lives in profound ways. Watch Sundays at 10 p.m. ET/PT starting October 10.',
      url: "https://www.cnn.com/videos/us/2021/10/07/this-is-life-lisa-ling-vincent-chin-clip-4.cnn",
      link: "https://www.wired.com/story/games-set-in-latin-america/",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/211007200028-this-is-life-lisa-ling-vincent-chin-clip-4-00003412-super-tease.png",
      image_url:
        "https://cdn.cnn.com/cnnnext/dam/assets/211007200028-this-is-life-lisa-ling-vincent-chin-clip-4-00003412-super-tease.png",
      publishedAt: "2021-10-08T00:02:45Z",
      pubDate: "2021-10-08T00:02:45Z",
      content: "This is Life with Lisa Ling",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      source_id: "BBC News",
      author: "https://www.facebook.com/bbcnews",
      title: "Vikings settled in North America in 1021AD, study says",
      description:
        "Scientists say they have precisely dated a camp in Newfoundland, Canada, thanks to a new technique.",
      url: "https://www.bbc.co.uk/news/world-us-canada-58996186",
      link: "https://www.wired.com/story/games-set-in-latin-america/",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/11284/production/_121167207_gettyimages-452370112.jpg",
      image_url:
        "https://ichef.bbci.co.uk/news/1024/branded_news/11284/production/_121167207_gettyimages-452370112.jpg",
      publishedAt: "2021-10-21T12:56:12Z",
      pubDate: "2021-10-21T12:56:12Z",
      content:
        "Image source, Getty Images\r\nImage caption, Replica Viking homes and other items at L'Anse aux Meadows, a Unesco world heritage site in Newfoundland, Canada\r\nVikings had a settlement in North America … [+2156 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      source_id: "New York Times",
      author: "Jordan Salama",
      title: "How the Colombian Band Morat Is Winning Over a Global Audience",
      description:
        "One of the fastest growing bands in Latin America is speaking to a generation whose personal anxieties often exist amid a broader backdrop of social turmoil.",
      url: "https://www.nytimes.com/2021/10/07/arts/music/morat-a-donde-vamos.html",
      link: "https://www.wired.com/story/games-set-in-latin-america/",
      urlToImage:
        "https://static01.nyt.com/images/2021/10/10/arts/10morat1/10morat1-facebookJumbo.jpg",
      image_url:
        "https://static01.nyt.com/images/2021/10/10/arts/10morat1/10morat1-facebookJumbo.jpg",
      publishedAt: "2021-10-07T14:00:09Z",
      pubDate: "2021-10-07T14:00:09Z",
      content:
        "The hallmarks of what Villamil called the bands very specific sonic signature include achingly nostalgic lyrics about unrequited love reminiscent of the classic boleros; choruses sung in unison; and … [+1897 chars]",
    },
  ];

  useEffect(() => {
    setContent(contentArray);
  }, []);

  // throttle function
  useEffect(() => {
    const throttle = setTimeout(() => {
      console.log(search);
      filter(search);
    }, 1000);
    return () => clearTimeout(throttle);
  }, [search]);

  const handleChange = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
  };

  const filter = (value) => {
    const filterTerm = value.toLowerCase().trim();
    if (!filterTerm) {
      setContent(contentArray);
    } else {
      // this snippet of code is to filter value if all the content is fetched at first:

      // const filteredArray = contentArray.filter((item) => {
      //   return Object.keys(item).some((key) => {
      //     return item[key]?.toString().toLowerCase().includes(filterTerm);
      //     // return ["title", "description"].includes(key)
      //     //   ? false
      //     //   : item[key]?.toString().toLowerCase().includes(filterTerm);
      //   });
      // });

      const contentArray = axios
        .get(
          `https://newsapi.org/v2/everything?q=${filterTerm}&apiKey=${process.env.api_key2}`
        )
        .then((res) => {
          setContent(res.data.articles);
        });
    }
  };

  const handleButtonClick = () => {
    const data = axios
      .get(`https://newsdata.io/api/1/news?apikey=${process.env.api_key}`)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="mt-10 max-w-screen-2xl mx-auto">
      <input
        type="text"
        placeholder="Search"
        className="border h-10 w-96 border-black p-4"
        onChange={(e) => handleChange(e)}
        value={search}
      />
      <div>
        <button onClick={handleButtonClick}>click</button>
        {content?.length === 0 ? (
          <p>No News to Display!</p>
        ) : (
          <div className="mt-10 flex flex-col space-y-8">
            {content.map((value, index) => (
              <NewsDetail value={value} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
