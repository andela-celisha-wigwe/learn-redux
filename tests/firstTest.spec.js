import expect from 'expect';
import React from 'react';
import Single from '../client/components/Single';

import { shallow } from 'enzyme';


describe('Component: Single Post', () => {

	const minProps = {
		posts: [
			{
				caption: "Test the application",
				code: "HYEDeiSKkjf",
				display_src: "https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg",
				id: "1161022966406956555",
				likes: 75
			},
			{
				caption: "Lunch #hamont",
				code: "BAcyDyQwcXX",
				display_src: "https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg",
				id: "1161022966406956503",
				likes: 56
			}
		],
		comments: {
			"BAhvZrRwcfu":[
			    {
			      "text":"Totally need to try this.",
			      "user": "heavymetaladam"
			    }
			],
			"BAcyDyQwcXX": [
				{
			      "text":"Wes. WE should have lunch.",
			      "user": "jdaveknox"
			    },
			    {
			      "text":"#adults",
			      "user": "jdaveknox"
			    },
			    {
			      "text":"@jdaveknox yes!",
			      "user": "wesbos"
			    },
			    {
			      "text":"😍 love Hamilton!",
			      "user": "willowtreemegs"
			    }
			]
		},
		addComment: () => {},
		removeComment: () => {},
		increment: () => {},
		params:{
			postId: "BAcyDyQwcXX"
		}
	};

	const SingleComponent = shallow(<Single {...minProps} />);
	const photo = SingleComponent.find('Photo');
	const comments = SingleComponent.find('Comments').prop('postComments');
	const post = photo.prop('post');

	it('reders without exploding', () => {
		expect(SingleComponent.length).toEqual(1);
		expect(true).toEqual(true);
	});

	it('should have an the id as a prop', () => {
		expect(photo.prop('i')).toEqual(1);
	});

	it('should have an the post prop with the correct caption', () => {
		expect(post.caption).toEqual("Lunch #hamont");
	});

	it('should have an the post prop with the correct id', () => {
		expect(post.id).toEqual("1161022966406956503");
	});

	it('should have an the post prop with the correct likes', () => {
		expect(post.likes).toEqual("56");
	});

	it('should have an the post prop with the correct display_src for image', () => {
		expect(post.display_src).toEqual("https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg");
	});

	it('should have the correct number of comments', () => {
		expect(comments.length).toEqual(4);
	});

	it('should have the second comment with correct text', () => {
		expect(comments[1].text).toEqual("#adults");
	});

	it('should have the second comment with correct user', () => {
		expect(comments[1].user).toEqual("jdaveknox");
	});
});