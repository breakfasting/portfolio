# Portfolio

[Live Site](https://waynesu.com)

A JAM Stack portfolio built with GatsbyJS, React Hooks and GraphQL.

![Screenshot](https://i.imgur.com/v9AU7mG.png)

## Technologies
* Frontend: GatsbyJS/React/GraphQL
* Hosting: Netlify
  * [React-Flip-Move](https://github.com/joshwcomeau/react-flip-move)
  * [React-Tag-Autocomplete](https://github.com/i-like-robots/react-tags)

## Features
### FLIP animated layouts
Handling the animation for elements that persist on the screen through layout changes, The [Flip technique](https://aerotwist.com/blog/flip-your-animations/#the-general-approach) is a principle that stands for First, Last, Invert, Play. Which seamlessly transitions layout elements between their first and last state. Resulting in smooth animations.

![Screenshot](https://i.imgur.com/nWRQbMn.gif)

### Higher-Order Components
```JSX
const ConditionalLayout = ({ condition, children }) => (
  condition ? <Layout>{children}</Layout> : children
);

const ModalExamplePage = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <ConditionalLayout condition={!modal}>
          <div className={styles.container}>
            <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
          </div>
        </ConditionalLayout>
      )}
    </ModalRoutingContext.Consumer>
  );
};
```

Utilizing Higher-Order Components (HOCs) to conditionally render the Layout component for DRY code. Which can then be reused throughout the project.

![Layout](https://i.imgur.com/8pzQ1KX.png)
