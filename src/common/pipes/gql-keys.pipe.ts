import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import snakeCase from 'lodash.snakecase';

export interface GqlKeysPipeData {
    extended?: boolean;
    keys?: string[];
}

@Injectable()
export class GqlKeysPipe implements PipeTransform {
    constructor(private readonly value: GqlKeysPipeData) {}

    public transform(value: any, metadata: ArgumentMetadata) {
        if (!this.value.extended) {
            return (
                value?.fieldNodes[0]?.selectionSet?.selections?.map((item) =>
                    snakeCase(item.name.value),
                ) ?? []
            );
        }

        let lastObject = value?.fieldNodes[0]?.selectionSet?.selections ?? [];

        this.value.keys.forEach((key) => {
            lastObject =
                lastObject?.find((item) => item.name.value === key)
                    ?.selectionSet?.selections ?? [];
        });

        return lastObject.map((item) => snakeCase(item.name.value));
    }
}
