import React from "react"
import ReactGridGallery from "react-grid-gallery"

import Layout from "../components/layout"
import SEO from "../components/seo"

import one from "../images/gallery/1.jpg"
import two from "../images/gallery/2.jpg"
import three from "../images/gallery/3.jpg"
import four from "../images/gallery/4.jpg"
import five from "../images/gallery/5.jpg"
import six from "../images/gallery/6.jpg"
import seven from "../images/gallery/7.jpg"
import eight from "../images/gallery/8.jpg"
import nine from "../images/gallery/9.jpg"
import ten from "../images/gallery/10.jpg"
import eleven from "../images/gallery/11.jpg"
import twelve from "../images/gallery/12.jpg"
import thirteen from "../images/gallery/13.jpg"
import fourteen from "../images/gallery/14.jpg"
import fifteen from "../images/gallery/15.jpg"
import sixteen from "../images/gallery/16.jpg"
import seventeen from "../images/gallery/17.jpg"
import eighteen from "../images/gallery/18.jpg"
import nineteen from "../images/gallery/19.jpg"
import twenty from "../images/gallery/20.jpg"
import twentyone from "../images/gallery/21.jpg"
import twentytwo from "../images/gallery/22.jpg"
import twentythree from "../images/gallery/23.jpg"
import twentyfour from "../images/gallery/24.jpg"
import twentyfive from "../images/gallery/25.png"

const IMAGES = [
  {
    src: one,
    thumbnail: one,
    caption: "Demo test caption",
    thumbnailWidth: 120,
    thumbnailHeight: 180,
  },
  {
    src: two,
    thumbnail: two,
    thumbnailWidth: 270,
    thumbnailHeight: 180,
  },

  {
    src: three,
    thumbnail: three,
    thumbnailWidth: 135,
    thumbnailHeight: 180,
  },
  {
    src: four,
    thumbnail: four,
    thumbnailWidth: 240,
    thumbnailHeight: 180,
  },
  {
    src: five,
    thumbnail: five,
    thumbnailWidth: 180,
    thumbnailHeight: 180,
  },
  {
    src: six,
    thumbnail: six,
    thumbnailWidth: 240,
    thumbnailHeight: 180,
  },
  {
    src: seven,
    thumbnail: seven,
    thumbnailWidth: 240,
    thumbnailHeight: 180,
  },
  {
    src: eight,
    thumbnail: eight,
    thumbnailWidth: 213,
    thumbnailHeight: 180,
  },
  {
    src: nine,
    thumbnail: nine,
    thumbnailWidth: 240,
    thumbnailHeight: 180,
  },
  {
    src: ten,
    thumbnail: ten,
    thumbnailWidth: 235,
    thumbnailHeight: 180,
  },
  {
    src: eleven,
    thumbnail: eleven,
    thumbnailWidth: 256,
    thumbnailHeight: 180,
  },
  {
    src: twelve,
    thumbnail: twelve,
    thumbnailWidth: 100,
    thumbnailHeight: 180,
  },
  {
    src: thirteen,
    thumbnail: thirteen,
    thumbnailWidth: 100,
    thumbnailHeight: 180,
  },
  {
    src: fourteen,
    thumbnail: fourteen,
    thumbnailWidth: 126,
    thumbnailHeight: 180,
  },
  {
    src: fifteen,
    thumbnail: fifteen,
    thumbnailWidth: 220,
    thumbnailHeight: 180,
  },
  {
    src: sixteen,
    thumbnail: sixteen,
    thumbnailWidth: 135,
    thumbnailHeight: 180,
  },
  {
    src: seventeen,
    thumbnail: seventeen,
    thumbnailWidth: 100,
    thumbnailHeight: 180,
  },
  {
    src: eighteen,
    thumbnail: eighteen,
    thumbnailWidth: 120,
    thumbnailHeight: 180,
  },
  {
    src: nineteen,
    thumbnail: nineteen,
    thumbnailWidth: 167,
    thumbnailHeight: 180,
  },
  {
    src: twenty,
    thumbnail: twenty,
    thumbnailWidth: 100,
    thumbnailHeight: 180,
  },
  {
    src: twentyone,
    thumbnail: twentyone,
    thumbnailWidth: 257,
    thumbnailHeight: 180,
  },
  {
    src: twentyfive,
    thumbnail: twentyfive,
    thumbnailWidth: 110,
    thumbnailHeight: 180,
  },
]

const Gallery = () => {
  return (
    <Layout>
      <SEO title="Mark Bosch - Gallery" />
      <div className="Gallery">
        <ReactGridGallery enableImageSelection={false} images={IMAGES} />
      </div>
    </Layout>
  )
}

export default Gallery
