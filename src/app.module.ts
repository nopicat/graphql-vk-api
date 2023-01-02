import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { PhotosModule } from './modules/photos/photos.module';
import { GroupsModule } from './modules/groups/groups.module';
import snakeCase from 'lodash.snakecase';
import * as path from 'path';
import * as process from 'process';

export const snakeCaseFieldResolver = (source, args, contextValue, info) => {
    return source[snakeCase(info.fieldName)];
};

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            playground: false,
            plugins: [ApolloServerPluginLandingPageLocalDefault()],
            typePaths: ['./**/*.graphql'],
            fieldResolver: snakeCaseFieldResolver,
            definitions: {
                path: path.join(process.cwd(), 'src/__generated__/graphql.ts'),
                outputAs: 'class',
            },
        }),
        UsersModule,
        PhotosModule,
        GroupsModule,
    ],
})
export class AppModule {}
