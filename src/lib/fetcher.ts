export async function fetcher(slug?: string): Promise<any> {
  try {
    const res = await fetch(`https://api.github.com/repos/itspedro-lab/Notes/contents/${slug ? `${slug}.mdx`: ''}`, {
      method: "GET",
      headers: {
        Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/vnd.github+json",
      },
    });
  const json = await res.json();
  return json;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
