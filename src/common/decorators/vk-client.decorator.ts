import {
    createParamDecorator,
    ExecutionContext,
    SetMetadata,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { VK } from 'vk-io';

export const VKClient = createParamDecorator(
    (data: unknown, context: ExecutionContext) => {
        const req = GqlExecutionContext.create(context).getContext().req;

        const token = req.headers.accesstoken;

        return new VK({ token });
    },
);
