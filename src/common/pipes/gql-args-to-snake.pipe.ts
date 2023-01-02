import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import snakeCase from 'lodash.snakecase';

@Injectable()
export class GqlArgsToSnakePipe implements PipeTransform {
    public transform(
        value: Record<string, unknown>,
        metadata: ArgumentMetadata,
    ) {
        let result = {};

        Object.keys(value)
            .map((key) => snakeCase(key))
            .forEach(
                (key, index) => (result[key] = Object.values(value)[index]),
            );

        return result;
    }
}
