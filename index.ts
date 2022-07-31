export type Options = {
  stripTrailing?: boolean
  ensureAbsolute?: boolean
}

export function normalizeUrlPath(path: string, options: Options = {}) {
  const { stripTrailing = true, ensureAbsolute = false } = options

  if (path === '/') return '/'

  if (ensureAbsolute) {
    path = '/' + path
  }

  if (path.length <= 1) return path

  const seqs = path.split(/\/+/)

  if (stripTrailing !== false && seqs[seqs.length - 1] === '') {
    seqs.pop()
  }

  return seqs.join('/')
}
