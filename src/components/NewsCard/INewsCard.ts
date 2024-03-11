/**
 * Props for the NewsCard component, representing a news article card.
 *
 * @interface NewsCardProps
 */
export interface NewsCardProps {
  /**
   * Information about the source of the news article.
   *
   * @type {{ id: string; name: string }}
   * @memberof NewsCardProps
   */
  source: {
    id: string;
    name: string;
  };

  /**
   * The author of the news article.
   *
   * @type {string}
   * @memberof NewsCardProps
   */
  author: string;

  /**
   * The title of the news article.
   *
   * @type {string}
   * @memberof NewsCardProps
   */
  title: string;

  /**
   * A brief description or summary of the news article.
   *
   * @type {string}
   * @memberof NewsCardProps
   */
  description: string;

  /**
   * The URL of the news article.
   *
   * @type {string}
   * @memberof NewsCardProps
   */
  url: string;

  /**
   * The URL of the image associated with the news article.
   * If no image is available, a default fallback image is used.
   *
   * @type {string}
   * @memberof NewsCardProps
   */
  urlToImage: string;

  /**
   * The timestamp when the news article was published.
   *
   * @type {string}
   * @memberof NewsCardProps
   */
  publishedAt: string;

  /**
   * The main content or body of the news article.
   *
   * @type {string}
   * @memberof NewsCardProps
   */
  content: string;
}
