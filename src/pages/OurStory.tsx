import Hero, { IHero } from '../components/Hero'
import TransparentCard, {
    ITransparentCard,
} from '../components/cards/TransparentCard'
import divider from '../assets/image/divider.png'
import Button from '../components/Button'

const ourStoryHeroContent: IHero = {
    subject: 'Find Out More about Your Local Cafe Owners',
}

const ourStoryTransparentContent: ITransparentCard = {
    title: 'Have a Dandy Start to Your Day!',
    description:
        'Book your table now, and your tastes buds will be thanking you!',
    button: 'Contact Us',
}

const src = 'https://www.youtube.com/embed/lWLxD7BzZ_Y'

const OurStory = (): JSX.Element => {
    return (
        <>
            <Hero subject={ourStoryHeroContent.subject} />
            <div className="bg-black max-w-screen-xl mx-auto my-6">
                <div className="grid grid-cols-4 gap-4">
                    <img
                        src="http://placekitten.com/550/550"
                        alt=""
                        className="col-span-2 p-8"
                    />
                    <div>
                        <div className="p-8 text-2xl">
                            WHO ARE DANDY LANE CAFE
                        </div>
                        <img className="w-72 p-8" src={divider} />
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quod atque possimus aspernatur amet, earum
                            labore commodi beatae itaque ipsum fugit velit
                            impedit sed, consectetur mollitia tenetur aliquam ex
                            quia reiciendis autem sunt dolores odit numquam
                            nostrum nisi. Sunt ullam aperiam eveniet temporibus
                            nemo, minus suscipit doloremque officiis impedit ea
                            dolore.
                        </div>
                        <Button className="my-4">Book now</Button>
                    </div>
                    <div>
                        <div className="p-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Unde asperiores laborum doloremque perferendis
                            eos excepturi ratione ea dolore distinctio,
                            consectetur doloribus quisquam ducimus sequi illo,
                            ipsum temporibus dicta! Voluptates, accusamus vitae
                            possimus voluptatum aliquid iste id odit error et
                            fugit!
                        </div>
                        <img
                            src="http://placekitten.com/550/550"
                            alt=""
                            className="col-span-1 p-8"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-black max-w-screen-xl mx-auto">
                <div className="flex flex-row ">
                    <div className="basis-1/2 gap-4">
                        <div className="flex flex-col p-10">
                            <div className="text-4xl mt-6 m-4">
                                Our Inspiration
                            </div>
                            <img className="w-72 m-4" src={divider} />
                            <div className="m-4 p-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Labore neque sequi ab
                                dignissimos adipisci quidem libero! Accusamus
                                esse voluptate obcaecati repellendus beatae
                                mollitia possimus numquam autem nobis? Iusto
                                nihil, debitis nobis obcaecati eius quisquam,
                                iure facilis omnis voluptatum est officia quis
                                iste tempore ab sequi, accusantium eos cumque
                                quod illo. Vitae totam quaerat eos ipsa quae
                                quia ratione beatae laudantium!
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/2">
                        <img
                            src="http://placekitten.com/550/550"
                            alt=""
                            className="p-6 m-auto"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-black max-w-screen-xl mx-auto my-6">
                <div className="flex flex-row">
                    <div className="basis-1/2 gap-4">
                        <iframe
                            className="m-auto p-4"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/lWLxD7BzZ_Y"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div className="basis-1/2 gap-4">
                        <iframe
                            className="m-auto p-4"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/n-ozFN8tGKM"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            </div>
            <TransparentCard
                title={ourStoryTransparentContent.title}
                description={ourStoryTransparentContent.description}
                button={ourStoryTransparentContent.button}
            />
        </>
    )
}

export default OurStory
