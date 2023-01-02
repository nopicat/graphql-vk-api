import { Resolver, Query, Args } from '@nestjs/graphql';
import { VKClient } from '../../common/decorators/vk-client.decorator';
import { GqlKeys } from '../../common/decorators/gql-keys.decorator';
import {
    BasicResponse,
    User,
    UserIdsAndGroupIdsWithCount,
    UsersWithCount,
    UsersWithCountAndFriendsCount,
} from '../../__generated__/graphql';
import { VK } from 'vk-io';
import { GqlArgsToSnakePipe } from '../../common/pipes/gql-args-to-snake.pipe';

@Resolver('Users')
export class UsersResolver {
    @Query(() => [User])
    public usersGet(
        @VKClient() vk: VK,
        @GqlKeys() keys,
        @Args(GqlArgsToSnakePipe) args,
    ) {
        return vk.api.users.get({
            ...args,
            fields: keys,
        });
    }

    @Query(() => [UsersWithCountAndFriendsCount])
    public async usersGetFollowers(
        @VKClient() vk: VK,
        @GqlKeys({ extended: true, keys: ['items'] }) keys,
        @Args(GqlArgsToSnakePipe) args,
    ) {
        return vk.api.users.getFollowers({
            ...args,
            fields: keys,
        });
    }

    @Query(() => [UserIdsAndGroupIdsWithCount])
    public usersGetSubscriptions(
        @VKClient() vk: VK,
        @GqlKeys({ extended: true, keys: ['users', 'items'] }) usersKeys,
        @GqlKeys({ extended: true, keys: ['groups', 'items'] }) groupsKeys,
        @Args(GqlArgsToSnakePipe) args,
    ) {
        return vk.api.users.getSubscriptions({
            ...args,
            fields: [...usersKeys, ...groupsKeys],
        });
    }

    @Query(() => [BasicResponse])
    public usersReport(@VKClient() vk: VK, @Args(GqlArgsToSnakePipe) args) {
        return vk.api.users.report({
            ...args,
        });
    }

    @Query(() => [UsersWithCount])
    public usersSearch(
        @VKClient() vk: VK,
        @GqlKeys({ extended: true, keys: ['items'] }) keys,
        @Args(GqlArgsToSnakePipe) args,
    ) {
        return vk.api.users.search({
            ...args,
            fields: keys,
        });
    }
}
