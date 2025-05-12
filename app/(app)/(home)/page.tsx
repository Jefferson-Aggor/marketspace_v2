import configPromise from '@payload-config'
import { getPayload } from 'payload'

const Home = async () => {
    const payload = await getPayload({
        config: configPromise
    })

    const data = await payload.find({
        collection: 'shops'
    })
    return (
        <div>
            {JSON.stringify(data, null, 5)}
        </div>
    )
}

export default Home