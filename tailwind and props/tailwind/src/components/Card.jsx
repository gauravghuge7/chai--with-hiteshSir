

function Card(props) {

    console.log(props);

    console.log(props.channel)
    return (
        <>
            <h1> props</h1>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
          <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/20656446/pexels-photo-20656446/free-photo-of-a-plane-flying-over-the-ocean-with-palm-trees-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512" />
          <div className="pt-6 space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            </blockquote>
        <figcaption>
          <div>
            Sarah Dayan
          </div>
          <div>
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
    </figure>
        </>
    );
     
}

export default Card