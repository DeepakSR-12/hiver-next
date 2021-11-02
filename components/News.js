import axios from "axios";
import { useEffect, useState } from "react";
import NewsDetail from "./NewsDetail";

const News = () => {
  const [content, setContent] = useState([]);
  const [search, setSearch] = useState("");

  // default news content array - search string - america
  const contentArray = [
    {
      source: {
        id: null,
        name: "Blogspot.com",
      },
      author: "noreply@blogger.com (Unknown)",
      title: "Stan Lee's First Superhero Became a Bloodthirsty Captain America",
      description:
        "Long before characters such as John Walker took inspiration from Captain America, Stan Lee's first superhero was a Cap pastiche named Destroyer. Though the character did enjoy a brief time in the spotlight of Marvel's early heroes, he quickly faded into obscu…",
      url: "https://techncruncher.blogspot.com/2021/10/stan-lees-first-superhero-became.html",
      urlToImage:
        "https://lh4.googleusercontent.com/proxy/0CnBHxb9chPCfSdy2gBD-h-kuBs6-xTENTHZIYRmE5ibouQP6gnwOrvd-PE80fD60vjx0d56ewW0k1WVdJVfJZ4dBhE-TDOqXzpIzZ2h6xoLtzRoEQHEwuBIMnIMxY1J-SrvIeXDXRupeLSRQHjhZEaTZdC-QM2ZUg-f=w1200-h630-p-k-no-nu",
      publishedAt: "2021-10-03T19:21:00Z",
      content:
        "Long before characters such as John Walker took inspiration from Captain America, Stan Lee's first superhero was a Cap pastiche named Destroyer. Though the character did enjoy a brief time in the spo… [+3260 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Gabriel Solis",
      title: "Oh, This Game Set in Latin America Has a Coup? How Original",
      description:
        "From '80s arcade titles to 'Far Cry 6,' video games have rehashed the same stereotypes of regimes and corruption.",
      url: "https://www.wired.com/story/games-set-in-latin-america/",
      urlToImage:
        "https://media.wired.com/photos/6160775579ac4f82ee691579/191:100/w_1280,c_limit/Games-Far-Cry-6-2.jpg",
      publishedAt: "2021-10-29T12:00:00Z",
      content:
        "I think that the theme of US intervention in Latin America, whether in the form of political intervention to overthrow a dictator or covert drug intervention, is one of the most typical ways that Lat… [+3373 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: null,
      title: "Chinese immigrants were targeted in 19th century America",
      description:
        '"This is Life with Lisa Ling" examines little known historical events that have impacted American lives in profound ways. Watch Sundays at 10 p.m. ET/PT starting October 10.',
      url: "https://www.cnn.com/videos/us/2021/10/07/this-is-life-lisa-ling-vincent-chin-clip-4.cnn",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/211007200028-this-is-life-lisa-ling-vincent-chin-clip-4-00003412-super-tease.png",
      publishedAt: "2021-10-08T00:02:45Z",
      content: "This is Life with Lisa Ling",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title: "Vikings settled in North America in 1021AD, study says",
      description:
        "Scientists say they have precisely dated a camp in Newfoundland, Canada, thanks to a new technique.",
      url: "https://www.bbc.co.uk/news/world-us-canada-58996186",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/11284/production/_121167207_gettyimages-452370112.jpg",
      publishedAt: "2021-10-21T12:56:12Z",
      content:
        "Image source, Getty Images\r\nImage caption, Replica Viking homes and other items at L'Anse aux Meadows, a Unesco world heritage site in Newfoundland, Canada\r\nVikings had a settlement in North America … [+2156 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Jordan Salama",
      title: "How the Colombian Band Morat Is Winning Over a Global Audience",
      description:
        "One of the fastest growing bands in Latin America is speaking to a generation whose personal anxieties often exist amid a broader backdrop of social turmoil.",
      url: "https://www.nytimes.com/2021/10/07/arts/music/morat-a-donde-vamos.html",
      urlToImage:
        "https://static01.nyt.com/images/2021/10/10/arts/10morat1/10morat1-facebookJumbo.jpg",
      publishedAt: "2021-10-07T14:00:09Z",
      content:
        "The hallmarks of what Villamil called the bands very specific sonic signature include achingly nostalgic lyrics about unrequited love reminiscent of the classic boleros; choruses sung in unison; and … [+1897 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Julian E. Barnes and JoAnna Daemmrich",
      title: "Submarine Spy Case: Couple Stewed Over Money and Politics",
      description:
        "Jonathan and Diana Toebbe, charged with trying to sell classified nuclear secrets to a foreign power, struggled with finances, family and the state of America.",
      url: "https://www.nytimes.com/2021/10/19/us/politics/jonathan-toebbe-diana-submarine.html",
      urlToImage:
        "https://static01.nyt.com/images/2021/10/19/us/politics/19dc-submarine-1/merlin_196085922_627d6f50-f5a3-429d-8578-fecf60ce9b9d-facebookJumbo.jpg",
      publishedAt: "2021-10-19T23:27:12Z",
      content:
        "In 2005, the couple, who had married in Georgia two years before, moved to Colorado, after Ms. Toebbe finished her Ph.D. in anthropology at Emory University. Both took jobs at the private Kent Denver… [+2381 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Trish Bendix",
      title: "Late Night Suggests a Few New Names for Facebook",
      description:
        "Stephen Colbert proposed names like “Aunt Brenda’s Three-Paragraph Rant-a-torium” or “Best Fun Times America Website.”",
      url: "https://www.nytimes.com/2021/10/21/arts/television/stephen-colbert-facebook-name.html",
      urlToImage:
        "https://static01.nyt.com/images/2021/10/21/arts/21latenight/21latenight-facebookJumbo.png",
      publishedAt: "2021-10-21T05:29:55Z",
      content:
        "Just in case they havent settled on one yet, we here at The Late Show have come up with a few appropriate names, like Pinsurrectionist, DikTok, Aunt Brendas Three-Paragraph Rant-a-torium, Best Fun Ti… [+1197 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Katharine Q. Seelye",
      title:
        "Jo-Carroll Dennison, Miss America During World War II, Dies at 97",
      description:
        "The oldest surviving former Miss America, she was among the first to object to wearing a swimsuit during her reign.",
      url: "https://www.nytimes.com/2021/10/29/us/jo-carroll-dennison-dead.html",
      urlToImage:
        "https://static01.nyt.com/images/2021/10/31/obituaries/31Dennison-obit1/29Dennison-new-facebookJumbo.jpg",
      publishedAt: "2021-10-29T23:17:03Z",
      content:
        "Over the last 45 years, while she was in and out of movies and television, in and out of Hollywood and New York, and in and out of two marriages, Ms. Dennison wrote portions of her autobiography. She… [+2105 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: null,
      title: "Brazil: A drought with roots in the Amazon jungle",
      description:
        "A severe drought in South America is due in part to deforestation in the Amazon jungle.",
      url: "https://www.bbc.co.uk/news/av/world-latin-america-58743367",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/8E7E/production/_120787463_p09xhw5t.jpg",
      publishedAt: "2021-10-01T23:06:05Z",
      content:
        "Large parts of South America are facing the most severe drought in nearly a century. At threat is one of the largest waterways in the region, the Paraná water system that millions of people in Brazil… [+359 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Charles M. Blow",
      title: "Can America Reform Policing and Fight Crime at the Same Time?",
      description:
        "We have seen too often how the lust to punish Black criminality — to inflate and pathologize it — wins out over all else.",
      url: "https://www.nytimes.com/2021/10/06/opinion/america-police-reform.html",
      urlToImage:
        "https://static01.nyt.com/images/2021/10/06/opinion/06blow1/06blow1-facebookJumbo.jpg",
      publishedAt: "2021-10-07T03:01:25Z",
      content:
        "As then-senator Joe Biden said during a speech on the floor:\r\nWe must take back the streets. It doesnt matter whether or not the person that is accosting your son or daughter or my son or daughter my… [+2062 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Julian E. Barnes and JoAnna Daemmrich",
      title: "Couple in Submarine Spy Case Stewed Over Money and Politics",
      description:
        "Jonathan and Diana Toebbe, charged with trying to sell classified nuclear secrets to a foreign power, struggled with finances, family and the state of America.",
      url: "https://www.nytimes.com/2021/10/19/us/politics/submarine-spy-case-toebbe.html",
      urlToImage:
        "https://static01.nyt.com/images/2021/10/19/us/politics/19dc-submarine-1/merlin_196085922_627d6f50-f5a3-429d-8578-fecf60ce9b9d-facebookJumbo.jpg",
      publishedAt: "2021-10-19T22:28:36Z",
      content:
        "Mr. Toebbes initial project, involving work related to nuclear fusion at the Lawrence Livermore National Laboratory, would have taken him to a career in California, working at the lab and on nuclear … [+2045 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Richard Sandomir",
      title: "Jay Black, Soaring Lead Singer of the Americans, Dies at 82",
      description:
        "His majestic baritone was the key to hits like “Only in America,” “Come a Little Bit Closer” and his signature song, “Cara, Mia.”",
      url: "https://www.nytimes.com/2021/10/24/arts/music/jay-black-dead.html",
      urlToImage:
        "https://static01.nyt.com/images/2019/12/28/obituaries/00black-jay-toppix/00black-jay-toppix-facebookJumbo.jpg",
      publishedAt: "2021-10-24T16:28:03Z",
      content:
        "That voice sustained him as a solo oldies act long after Jay and the Americans broke up in 1973. But in 2017, during one of his last performances, Mr. Black apologized to fans at the Mohegan Sun Aren… [+1255 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Trish Bendix",
      title:
        "Late Night Savors What’s Left of Biden’s ‘Build Back Better’ Plan",
      description:
        "Trevor Noah said the excision of family leave meant that “America will remain the only nation in the world where women try to give birth during their lunch break.”",
      url: "https://www.nytimes.com/2021/10/29/arts/television/trevor-noah-biden-plan-health-care.html",
      urlToImage:
        "https://static01.nyt.com/images/2021/10/29/arts/29latenight/29latenight-facebookJumbo.png",
      publishedAt: "2021-10-29T05:49:28Z",
      content:
        "Yeah, Facebook changed their name. In response, Spectrum was like, We used to be Time Warner; people still hate us. JIMMY FALLON\r\nYeah, Meta, as in when I joined Facebook, I Meta lot of crazy people.… [+771 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "By David Williams, CNN",
      title:
        "Brick foundation of historic Black church has been found — buried under a parking lot",
      description:
        "The First Baptist Church of Williamsburg, in Virginia, is as old as America, having been founded by free and enslaved Blacks in 1776.",
      url: "https://www.cnn.com/travel/article/colonial-williamsburg-black-church-found-trnd/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/211007120806-01-black-church-williamsburg-find-trnd-super-tease.jpg",
      publishedAt: "2021-10-07T21:03:30Z",
      content:
        "(CNN) The First Baptist Church in Williamsburg, Virginia, is as old as America, having been founded by free and enslaved Blacks in 1776.\r\nAt that time, it was illegal for African Americans to gather,… [+4472 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: null,
      title:
        "Women's football in America 'swept things under the rug' - ex-US midfielder O'Reilly",
      description:
        "Former USA international Heather O'Reilly says that women's football in the US was guilty of ignoring issues in a bid to establish the National Women's Soccer League.",
      url: "https://www.bbc.co.uk/sport/football/58840847",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/81EB/production/_120995233_gettyimages-955265188.jpg",
      publishedAt: "2021-10-08T16:43:40Z",
      content:
        "NWSL players pause matches in show of solidarity\r\nFormer USA international Heather O'Reilly says that women's football in the US was guilty of ignoring issues in a bid to establish the National Women… [+5843 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: null,
      title: "This is why militia membership grew after Trump's election",
      description:
        'Lisa Ling says that armed private militias have existed in America for years, but they grew in size after Donald Trump was elected president. Watch "This is Life with Lisa Ling" Sunday 10pm E.T. on CNN.',
      url: "https://www.cnn.com/videos/us/2021/10/31/lisa-ling-america-militias-trump-election-sot-nr-vpx.cnn",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/210205104923-104-january-6-capitol-riots-super-tease.jpg",
      publishedAt: "2021-10-31T23:57:57Z",
      content: "This is Life with Lisa Ling",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Nadia Leigh-Hewitson, CNN",
      title:
        "'Whole forests will be saved': Is solar cooking more than just a flash in the pan?",
      description:
        "From cool, dewy European mountain ranges and humid Central Asian forests to the urban sprawl across North America and the arid landscapes of the African continent, millions of people are cooking with only the sun's rays as fuel.",
      url: "https://www.cnn.com/2021/10/21/asia/janak-palta-mcgilligan-solar-cooking-c2e-spc-intl/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/211020173121-janak-palta-mcgilligan-solar-cooking-2-restricted-super-tease.jpg",
      publishedAt: "2021-10-21T08:28:54Z",
      content:
        "This story was identified by Call to Earth guest editor Rodrigo Pacheco. He is a chef who grows sustainable food at his restaurant and creative permaculture project in Ecuador, and he is a former UN … [+5088 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Justin Carter",
      title: "Halloween Kills It at the Box Office, Not So Much at Peacock",
      description:
        "Looks like Michael Myers can’t be stopped, in either Haddonfield or in real life. Halloween Kills released on Friday both in theaters and on Peacock, and absolutely dominated at the box office with a $55 million take. Most of it came from North America and it…",
      url: "https://gizmodo.com/halloween-kills-it-at-the-box-office-not-so-much-at-pe-1847881376",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/22bf2299c973cf91006c5c28d5f9dd50.png",
      publishedAt: "2021-10-17T20:30:00Z",
      content:
        "Looks like Michael Myers cant be stopped, in either Haddonfield or in real life. Halloween Killsreleased on Friday both in theaters and on Peacock, and absolutely dominated at the box office with a $… [+1726 chars]",
    },
    {
      source: {
        id: "ars-technica",
        name: "Ars Technica",
      },
      author: "Kiona N. Smith",
      title: "Vikings were in North America by 1021 CE",
      description:
        "An ancient cosmic ray event helped archaeologists pinpoint the date.",
      url: "https://arstechnica.com/science/2021/10/vikings-were-in-north-america-by-1021-ce/",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2021/10/LAM-1-667x380.jpg",
      publishedAt: "2021-10-20T17:00:16Z",
      content:
        "Enlarge/ Aerial image of L'Anse aux Meadows, Newfoundland, Canada.\r\n0 with 0 posters participating\r\nCenturies before Christopher Columbus stumbled across the Bahamas, the Vikings established a beachh… [+2877 chars]",
    },
    {
      source: {
        id: null,
        name: "Slashdot.org",
      },
      author: "msmash",
      title: "America is Choking Under an 'Everything Shortage'",
      description:
        "The global supply chain is slowing down at the very moment when Americans are demanding that it go into overdrive. The Atlantic: Is it just me, or does it feel like America is running out of everything? I visited CVS last week to pick up some at-home COVID-19…",
      url: "https://slashdot.org/story/21/10/13/1722201/america-is-choking-under-an-everything-shortage",
      urlToImage: "https://a.fsdn.com/sd/topics/business_64.png",
      publishedAt: "2021-10-13T17:22:00Z",
      content:
        "Is it just me, or does it feel like America is running out of everything? I visited CVS last week to pick up some at-home COVID-19 tests. They'd been sold out for a week, an employee told me. So I as… [+1441 chars]",
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

  return (
    <div className="mt-10">
      <input
        type="text"
        placeholder="Search"
        className="border h-10 w-96 border-black p-4"
        onChange={(e) => handleChange(e)}
        value={search}
      />
      <div>
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
