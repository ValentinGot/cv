const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { credential } = require('firebase-admin');

const serviceAccount = require('./service-account-auth.json');
const database = {
  'personal-infos': [
    {
      id: 'VVOYw19ifhLgXfE6NxNZ',
      document: require('./personal-infos-fr.json')
    },
    {
      id: 'XCJn7Ltl4D0mdi9xzIhS',
      document: require('./personal-infos-en.json')
    }
  ],
  skills: [
    {
      id: '4bUNvDLbVv1NE7jOtbEF',
      document: require('./skills-fr.json')
    },
    {
      id: 'xZLzHDmoVP9JUygs6WeQ',
      document: require('./skills-en.json')
    }
  ],
  experiences: [
    {
      id: 'HYOP0cpqsas080B8brXO',
      document: require('./experiences-fr.json')
    },
    {
      id: 'n94DqrRBEDWT2FI1Q9PD',
      document: require('./experiences-en.json')
    }
  ],
  career: [
    {
      id: 'd57ZOHfB1SSJLUxH3OCu',
      document: require('./career-fr.json')
    },
    {
      id: 'kXpEvQhuZvV4y9nAENMg',
      document: require('./career-en.json')
    }
  ]
};

initializeApp({
  credential: credential.cert(serviceAccount),
  databaseURL: 'https://valentin-got-cv.firebaseio.com'
})

const db = getFirestore();
(async () => {
  for (const [ collection, documents ] of Object.entries(database)) {
    for (const { id, document } of documents) {
      await db.collection(collection).doc(id).set(document);
    }
  }
})();
