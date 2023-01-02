import { Info } from '@nestjs/graphql';
import { GqlKeysPipe, GqlKeysPipeData } from '../pipes/gql-keys.pipe';

export const GqlKeys = (data: GqlKeysPipeData = {}) =>
    Info(new GqlKeysPipe(data));
