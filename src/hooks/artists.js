import { useStaticQuery, graphql } from "gatsby"

export const artistsData = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
        query ArtistsData {
            markdownRemark {
                html
                frontmatter {
                    title
                    description
                }
            }
        }
    `
  )
  return markdownRemark
}

export default artistsData