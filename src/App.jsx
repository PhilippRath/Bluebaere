import { useState } from 'react'
import './App.css'
import { Card, CardHeader, CardBody, CardFooter, Heading, Grid, GridItem, Image, Stack, Box, UnorderedList, ListItem } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  const shopItems = [{
    Name: 'Blauer Fae',
    BeutelAnzahl: 20,
    Ziehzeit: "8 Min.",
    Preis: '2€'  
  },
  {
    Name: 'Verheerende Beeren',
    BeutelAnzahl: 25,
    Ziehzeit: "6-8 Min.",
    Preis: "2,50€"
  },
  {
    Name: 'Blue Kakadu',
    BeutelAnzahl: 20,
    Ziehzeit: "10 Min.",
    Preis: '1,30€'
  },
  {
    Name: 'Blaues Zauberland',
    BeutelAnzahl: 10,
    Ziehzeit: "12 Min.",
    Preis: "1,99€"
  }]
  
  return (
    <>
      <Heading as='h1' size='4xl' mb={6}>Bluebaere</Heading>
      <p>Willkommen!</p>
      <Heading as='h2' mb={6}>Blaubeerteesorten</Heading>
      <Grid templateColumns='repeat(3, 1fr)' gap={5} >
        {
          shopItems.map(tea => { 
            return (
              <GridItem>
                <Card className='tea-card'>
                  <CardBody>
                    <Image borderRadius='lg' alt='Blaubeeren' src='https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                    <Stack mt={6} spacing={3}>
                      <Heading>{tea.Name}</Heading>
                    </Stack>
                    <Box mt={6} mx={6}>
                      <UnorderedList>
                        <ListItem>{tea.BeutelAnzahl} Beutel</ListItem>
                        <ListItem>Ziehzeit: {tea.Ziehzeit}</ListItem>
                        <ListItem>Preis: {tea.Preis}</ListItem>
                      </UnorderedList>
                    </Box>
                  </CardBody>
                </Card>
              </GridItem>
            )
          })
        }
      </Grid>
    </>
  )
}

export default App
