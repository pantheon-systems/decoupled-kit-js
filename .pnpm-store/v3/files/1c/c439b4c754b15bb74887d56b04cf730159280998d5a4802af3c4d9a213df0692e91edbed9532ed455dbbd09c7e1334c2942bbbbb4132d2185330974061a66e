import { IJsonPropertiesMapper, TJsonaModel, TJsonaRelationships, TJsonApiBody, TJsonApiData, IJsonaDeserializer, IDeserializeCache, TResourceIdObj } from '../JsonaTypes';
export declare class JsonDeserializer implements IJsonaDeserializer {
    protected pm: IJsonPropertiesMapper;
    protected dc: IDeserializeCache;
    protected body: any;
    protected dataInObject: any;
    protected preferNestedDataFromData: boolean;
    protected includedInObject: any;
    constructor(propertiesMapper: any, deserializeCache: any, options: any);
    setDeserializeCache(dc: any): void;
    setPropertiesMapper(pm: any): void;
    setJsonParsedObject(body: TJsonApiBody): void;
    build(): TJsonaModel | Array<TJsonaModel>;
    buildModelByData(data: TJsonApiData, resourceIdObj?: TResourceIdObj): TJsonaModel;
    buildRelationsByData(data: TJsonApiData, model: TJsonaModel): TJsonaRelationships | null;
    buildDataFromIncludedOrData(id: string | number, type: string): TJsonApiData;
    buildDataInObject(): {
        [key: string]: TJsonApiData;
    };
    buildIncludedInObject(): {
        [key: string]: TJsonApiData;
    };
}
export default JsonDeserializer;
