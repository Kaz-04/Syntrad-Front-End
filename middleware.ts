import { NextResponse } from 'next/server'

export function middleware(request) {
  const host = request.headers.get('host')

  if (host === 'review.syntradltd.co.uk') {
    return NextResponse.redirect(
      'https://search.google.com/local/writereview?placeid=ChIJlS1xTEAN1ocRYOmWQ_P57LQ'
    )
  }

  return NextResponse.next()
}
