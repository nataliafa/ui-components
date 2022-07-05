import React from "react"
import {
  Slider,
  Container,
  Item,
  Controls,
  UnstyledContainer,
  Engine,
  UnstyledItem,
  Title,
  Text,
  UnstyledControls,
  Arrow,
} from "../components/slider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import img1 from "./assets/slider/pexels-andy-vu-3244513.jpg"
import img2 from "./assets/slider/pexels-eberhard-grossgasteiger-572897.jpg"
import img3 from "./assets/slider/pexels-matheus-bertelli-1144687.jpg"
import "./styles/font.css"

export default {
  title: "Components/Slider",
  component: Slider,
}

const slides = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    text: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    img: img1,
  },
  {
    id: 2,
    title: "Vulputate odio ut enim blandit",
    text: "In egestas erat imperdiet sed. Nisi vitae suscipit tellus mauris",
    img: img2,
  },
  {
    id: 3,
    title: "Maecenas volutpat blandit aliquam etiam",
    text: "Volutpat consequat mauris nunc congue. Tincidunt augue interdum velit",
    img: img3,
  },
]

export const Basic = () => (
  <Slider slides={slides} width="700px" height="400px" />
)

export const BasicPlusUserStyles = () => (
  <Container width="700px" height="400px">
    <Engine
      slides={slides}
      item={(id, slide, active) => (
        <Item
          id={id}
          key={id}
          active={active}
          backgroundImage={slide.img}
          style={{ borderRadius: 45 }}
        >
          <Title dangerouslySetInnerHTML={{ __html: slide.title }} />
          <Text dangerouslySetInnerHTML={{ __html: slide.text }} />
        </Item>
      )}
      controls={(prev, next) => (
        <Controls>
          <Arrow
            onClick={() => prev()}
            style={{ border: "1px solid white", borderRadius: "50%" }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </Arrow>
          <Arrow
            onClick={() => next()}
            style={{ border: "1px solid white", borderRadius: "50%" }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </Arrow>
        </Controls>
      )}
    />
  </Container>
)
BasicPlusUserStyles.storyName = "Basic + User Styles"

export const Flexbox = () => (
  <div style={{ display: "flex", width: "100%", height: "400px" }}>
    <Slider slides={slides} style={{ flexGrow: 1 }} />
    <Slider slides={slides} style={{ flexGrow: 1 }} />
  </div>
)

export const Unstyled = () => (
  <UnstyledContainer width="700px" height="400px">
    <Engine
      slides={slides}
      item={(id, slide, active) => (
        <UnstyledItem
          id={id}
          key={id}
          active={active}
          backgroundImage={slide.img}
        >
          <h2
            dangerouslySetInnerHTML={{ __html: slide.title }}
            style={{ margin: "50px 0 0 50px", color: "white" }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slide.text }}
            style={{ margin: "10px 0 0 50px", color: "white" }}
          />
        </UnstyledItem>
      )}
      controls={(prev, next) => (
        <UnstyledControls
          style={{ position: "absolute", left: 50, bottom: 50 }}
        >
          <button onClick={() => prev()} style={{ padding: 10, marginLeft: 0 }}>
            Prev
          </button>
          <button
            onClick={() => next()}
            style={{ padding: 10, marginLeft: 10 }}
          >
            Next
          </button>
        </UnstyledControls>
      )}
    />
  </UnstyledContainer>
)
