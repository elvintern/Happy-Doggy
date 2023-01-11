import React from 'react'

export default function About() {
  return (
    <>
      <h1 className="heading heading-primary">About Happy Doggy</h1>
      <div className="about-cards">
        <div className="about-card">
          <h2 className="heading-secondary">Happy Owners!</h2>
          <img
            className="about-img"
            src="/client/src/images/dog-and-owner.jpeg"
            alt="happy dog and owner"
          />
          <p className="paragraph">
            We know that being short on time makes it harder to take your four
            legged family member on walks. Happy Doggy takes the pressure off!
            You can feel relieved knowing your beloved pooch is in safe hands!
          </p>
        </div>
        <div className="about-card">
          <h2 className="heading-secondary">Happy Dogs!</h2>
          <img
            className="about-img"
            src="/client/src/images/sassy_hazel.jpg"
            alt="happy dog about to go for a walk"
          />
          <p className="paragraph">
            We know how much dogs love and need excercise and walks. Happy Doggy
            means your dogs make new friends with their walker, and get the
            walks they want!
          </p>
        </div>
        <div className="about-card">
          <h2 className="heading-secondary">Happy Walkers!</h2>
          <img
            className="about-img"
            src="/client/src/images/Happy_woman.jpeg"
            alt="happy dog spending time with a new friend"
          ></img>
          <p className="paragraph">
            Love dogs, love walking dogs, but are not able to have one of you
            own? Happy Doggy gives you the opportunity to spend time with a dog
            you love, and give them the gift of companionship and excercise!
          </p>
        </div>
      </div>
    </>
  )
}
