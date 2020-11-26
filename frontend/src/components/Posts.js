import React from 'react'
import Container from '@material-ui/core/Container';
import Post from './Post'
import styles from './Posts.module.css'

export default function Posts(props) {

    let listOfPosts = [
        {
            title: "How to bake delicious cookies!",
            author: "Alex",
            content: "Hey guys today I found a great recipe to make the best cookies you've ever had! The only ingredients you need are eggs, chocolate and flour.",
            img: "https://images.unsplash.com/photo-1557310717-d6bea9f36682?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        },
        {
            title: "How to perform efficient, real time simulations",
            author: "Max",
            content: "Have you ever looked at your computer screen and thought: This bad boy needs to run some cutting edge fluid simulation algorithms? If so, this article is for you!",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
        {
            title: "Another one",
            author: "djk",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet, sapien et convallis luctus, massa risus ultrices enim, vitae tristique.",
            img: "https://images.unsplash.com/photo-1577930595497-05902654453e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGp8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
        }
    ];

    function renderPosts() {
        return listOfPosts.map((p) => (
            <Post
                title={p.title}
                author={p.author}
                content={p.content}
                img={p.img}
            />
        ))
    }

    return (
        <div className={styles.root}>
            <Container className={styles.container} maxWidth="lg">
                {renderPosts()}
            </Container>
        </div>
    );
}
