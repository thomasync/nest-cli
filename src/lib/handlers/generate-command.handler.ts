import {CommandArguments, CommandOptions, Logger} from '../../common/interfaces';
import {AssetEnum} from '../../common/enums';
import {AssetGenerator} from '../../core/generators';
import {CommandHandler} from '../../common/interfaces/command.handler.interface';

const ASSETS_MAP: Map<string, AssetEnum> = new Map<string, AssetEnum>([
  [ 'module', AssetEnum.MODULE ],
  [ 'controller', AssetEnum.CONTROLLER ],
  [ 'component', AssetEnum.COMPONENT ],
]);

export interface GenerateCommandArguments extends CommandArguments {
  asset: string
  name: string
}

export interface GenerateCommandOptions extends CommandOptions {}

export class GenerateCommandHandler implements CommandHandler {
  public execute(args: GenerateCommandArguments, options: GenerateCommandOptions, logger: Logger): Promise<void> {
    const asset: AssetEnum = ASSETS_MAP.get(args.asset);
    const name: string = args.name;
    return new AssetGenerator(asset).generate(name);
  }
}
