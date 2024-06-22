import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function NewsDetailPage({ params }) {
    const newsSlug = params.slug;
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

    if (!newsItem) notFound();
    
    const {title, image, date, content} = newsItem;
    
    return (
      <article className="news-article">
        <header>
          <img src={`/images/news/${image}`} alt={title} />
          <h1>{title}</h1>
          <time dateTime={date}>{date}</time>
        </header>
        <p>{content}</p>
      </article>
    );
  }