import { MongoClient } from 'mongodb'

async function handler(req, res) {
	if (req.method === 'POST') {
		const data = req.body

		const client = await MongoClient.connect(
			'mongodb+srv://mpocwiardowski:tnmLqEI56WyjzMJU@cluster0.vlusofg.mongodb.net/cars?retryWrites=true&w=majority'
		)
		const db = client.db()

		const carsCollection = db.collection('cars')

		const result = await carsCollection.insertOne(data)
		console.log(result)

        client.close()

        res.status(201).json({message: 'Car entry successfully added.'});
	}
}

export default handler
