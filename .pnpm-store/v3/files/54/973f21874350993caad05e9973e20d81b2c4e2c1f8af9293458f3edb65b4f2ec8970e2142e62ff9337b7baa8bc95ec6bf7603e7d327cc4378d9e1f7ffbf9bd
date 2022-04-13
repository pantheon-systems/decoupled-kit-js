import { TJsonaModel, TJsonApiBody, TJsonApiData, TJsonaDenormalizedIncludeNames, TJsonaNormalizedIncludeNamesTree, TJsonaUniqueIncluded, IModelPropertiesMapper, IModelsSerializer } from '../JsonaTypes';
export declare class ModelsSerializer implements IModelsSerializer {
    protected propertiesMapper: IModelPropertiesMapper;
    protected stuff: TJsonaModel | Array<TJsonaModel>;
    protected includeNamesTree: TJsonaNormalizedIncludeNamesTree;
    constructor(propertiesMapper?: IModelPropertiesMapper);
    setPropertiesMapper(propertiesMapper: IModelPropertiesMapper): void;
    setStuff(stuff: any): void;
    setIncludeNames(includeNames: TJsonaDenormalizedIncludeNames | TJsonaNormalizedIncludeNamesTree): void;
    build(): TJsonApiBody;
    buildDataByModel(model: TJsonaModel | null): TJsonApiData;
    buildRelationshipsByModel(model: TJsonaModel): {};
    buildIncludedByModel(model: TJsonaModel, includeTree: TJsonaNormalizedIncludeNamesTree, builtIncluded?: TJsonaUniqueIncluded): void;
    buildIncludedItem(relationModel: TJsonaModel, subIncludeTree: TJsonaNormalizedIncludeNamesTree, builtIncluded: TJsonaUniqueIncluded): void;
}
export default ModelsSerializer;
