import React from "react";
import Link from "../Link.react"
import renderer from "react-test-rederer"

test('renders correctly', () => {
    const tree = renderer
        .create(<Link page="http://www.facebook.com">FaceBook</Link>)
        .toJSON()
    expect(tree).toMatchSnapShot()
})