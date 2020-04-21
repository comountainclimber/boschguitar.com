import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import releaseData from "../releases.json"

const Gallery = () => {
  const { releases } = releaseData
  return (
    <Layout>
      <SEO title="Mark Bosch - Discography" />

      <div className="Music">
        <div class="discography-table">
          {releases
            .sort((a, b) => b.year - a.year)
            .map(release => {
              return (
                <>
                  <span>
                    <div style={{ display: "inline-block" }}>
                      {release.artist} -
                      <a href={release.uri} target="_blank">
                        {release.title}
                      </a>
                    </div>
                  </span>
                  <span>{release.year}</span>
                  <span>
                    <img src={release.thumb} />
                  </span>
                </>
              )
            })}
        </div>
      </div>
    </Layout>
  )
}

export default Gallery
