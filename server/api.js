const { get } = require('axios')
const express = require('express')
const LRUCache = require('lru-cache')

const server = express()
const cache = new LRUCache()

server.get('/github/:owner/:repo/authors', async (req, res) => {
  const { owner, repo } = req.params
  const key = `${owner}/${repo}`

  if (cache.get(key)) {
    return res.json(cache.get(key))
  }

  try {
    const { data } = await get(`https://api.github.com/repos/${key}/stats/contributors`)
    const authors = data.map(({ author }) => author.login)

    cache.set(key, authors)
    res.json(authors)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

module.exports = server
