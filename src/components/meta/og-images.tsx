/* eslint-disable @next/next/no-img-element */
import { TPostFrontMatter } from '@/types/blog';
import { addOpacity } from '@/utils/misc';
import { CSSProperties } from 'react';


const styles: Record<string, CSSProperties> = {
  container: {
    background: `linear-gradient(300deg, transparent, ${addOpacity('#55BDB3', 0.2)})`,
    backgroundColor: "#08121B",
    backgroundRepeat: "no-repeat",

    backgroundPosition: "top left",
    display: "flex",
    flexDirection: "column",
    fontWeight: 400,
    height: "100%",
    justifyContent: "center",
    paddingBottom: 104,
    paddingLeft: 132,
    paddingRight: 132,
    position: "relative",
    width: "100%",
  },
  pageContainer: {
    background: `linear-gradient(300deg, transparent, ${addOpacity('#55BDB3', 0.2)})`,
    backgroundColor: "#08121B",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top left",
    display: "flex",
    flexDirection: "column",
    fontWeight: 400,
    height: "100%",
    justifyContent: "center",
    position: "relative",
    width: "100%",
  },
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    height: "100%",
    width: "60%",
    margin: "auto",
    textAlign: "center",
  },
  pageTitle: {
    color: "#FFFFFF",
    fontSize: 100,
    fontWeight: 800,
    lineHeight: 1.15,
    marginBottom: 28,
  },
  pageDescription: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: `${addOpacity('#38817a', 0.2)}`,
    color: "#55BDB3",
    fontSize: 48,
    fontWeight: 400,
    height: 48,
    padding: "7% 10%",
  },
  title: {
    color: "#C9C9C9",
    fontSize: 68,
    fontWeight: 800,
    lineHeight: 1.15,
    marginBottom: 28,
  },
  tags: {
    display: "flex",
  },
  tag: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: `${addOpacity('#38817a', 0.2)}`,
    color: "#55BDB3",
    fontSize: 20,
    fontWeight: 800,
    display: "flex",
    height: 48,
    marginRight: 16,
    paddingLeft: 16,
    paddingRight: 20,
  },
  tagHash: {
    color: "#55BDB3",
    marginRight: 4,
  },
  author: {
    alignItems: "center",
    bottom: 64,
    display: "flex",
    left: 132,
    position: "absolute",
    right: 132,
  },
  authorAvatar: {
    borderRadius: "8%",
    marginRight: 16,
  },
  divider: {
    color: "#475569",
    marginLeft: 8,
    marginRight: 8,
    fontSize: 24,
  },
  authorName: {
    color: "#C4C4C4CC",
    display: "flex",
    fontSize: 26,
    fontWeight: 800,
  },
  description: {
    color: "#C4C4C4",
    fontSize: 26,
  },
  borderBottom: {
    backgroundColor: "#55BDB3",
    bottom: 0,
    height: 12,
    left: 0,
    position: "absolute",
    right: 0,
  },
};

type TPostOgImage = Partial<
  Pick<TPostFrontMatter, "title" | "date" | "tags">
> & {
  aspectRatio?: "16/9" | "4/3" | "1/1";
};

type TPageOgImage = Partial<Pick<TPostFrontMatter, "title" | "description">>;

export function PostOgImage({
  title = "",
  tags = [],
  date = "",
}: TPostOgImage) {
  return (
    <div style={styles.container}>
      {title && (
        <>
          <div style={styles.title}>{title}</div>
          <div />
        </>
      )}

      {tags && Array.isArray(tags) && tags.length > 0 && (
        <>
          <div style={styles.tags}>
            {tags.slice(0, 3).map((tag) => (
              <div style={styles.tag} key={tag}>
                <div style={styles.tagHash}>#</div>
                <div style={styles.tagTitle}>{tag}</div>
              </div>
            ))}
          </div>
          <div />
        </>
      )}

      <div style={styles.author}>
        <img
          alt="Pedro Reis"
          width="48"
          height="48"
          src="https://github.com/itspedro.png?size=48"
          style={styles.authorAvatar}
        />
        <div style={styles.authorName}>@itspedro</div>

        {date && (
          <>
            <div style={styles.divider}>&middot;</div>
            <div style={styles.description}>{date}</div>
          </>
        )}
      </div>
      <div style={styles.borderBottom} />
    </div>
  );
}

export function PageOgImage({ 
  title = "", description = "" 
}: TPageOgImage) {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.page}>
      {title && (
        <>
          <div style={styles.pageTitle}>{title}</div>
          <div />
        </>
      )}

      {description && (
        <>
          <div style={styles.pageDescription}>{description}</div>
          <div />
        </>
      )}
      </div>
    </div>
  );
}
