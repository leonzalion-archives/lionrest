import { Type } from '@sinclair/typebox';

import { defReply, defRestSchema } from '../src';
import { defNullReply } from '../src/utils/reply';

const mySchema = defRestSchema({
	'/route1': {
		get: {
			headers: Type.Object({
				'x-my-header': Type.String(),
			}),
			searchParams: Type.Object({
				query: Type.String(),
			}),
			replies: {
				success: defNullReply().statusCode(200),
				failure: defReply<{ message: string }>().statusCode(403),
			},
		},
		post: {
			headers: Type.Object({
				'x-my-header': Type.String(),
			}),
			body: Type.Object({
				username: Type.String(),
			}),
			replies: {
				failure: defReply<null>().statusCode(403),
			},
		},
	},
});

export type MySchema = typeof mySchema;