import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { rmSync } from 'node:fs';
import { cvScannerPrompt } from 'src/constants/geminiPrompt';
import { GeminiService } from 'src/integrations/gemini/gemini.service';
// import { CVResume } from 'src/adapters/database/entities/cvResume.entity';
// import { File } from 'src/adapters/database/entities/file.entity';
// import { LoginType } from 'src/adapters/database/entities/loginType.entity';
// import { User } from 'src/adapters/database/entities/user.entity';
// import { cvResumeProviders } from 'src/adapters/database/providers/cvResume.providers';
// import { fileProviders } from 'src/adapters/database/providers/file.providers';
// import { loginTypeProviders } from 'src/adapters/database/providers/loginType.providers';
// import { userProviders } from 'src/adapters/database/providers/user.provider';
// import { FirebaseService } from 'src/integrations/firebase/firebase.service';

// import { Repository } from 'typeorm';

@Injectable()
export class CVResumeService {
  constructor(
    private readonly geminiService: GeminiService,
    // private readonly firebaseService: FirebaseService,

    // @Inject(loginTypeProviders[0].provide)
    // private readonly loginTypeRepository: Repository<LoginType>,

    // @Inject(userProviders[0].provide)
    // private readonly userRepository: Repository<User>,

    // @Inject(fileProviders[0].provide)
    // private readonly fileRepository: Repository<File>,

    // @Inject(cvResumeProviders[0].provide)
    // private readonly cvResumeRepository: Repository<CVResume>,
  ) {}
  async uploadFile({
    filePath,
    filename,
  }: {
    filePath: string;
    filename: string;
  }) {
    const upload = await this.geminiService.uploadFile({
      displayName: filename,
      filePath,
      mimeType: 'application/pdf',
    });

    let responseJSON = {};

    const attempts = 3;

    try {
      for (let i = 0; i < attempts; i++) {
        try {
          const response = await this.geminiService.generateContent({
            upload,
            text: cvScannerPrompt,
          });

          const responseText = response.response
            .text()
            .replaceAll('`', '')
            .replaceAll('json', '');

          responseJSON = JSON.parse(responseText);
        } catch (error: any) {
          if (error.message.includes('SyntaxError')) {
            continue;
          }

          return new InternalServerErrorException();
        }
      }
    } finally {
      rmSync(filePath, { retryDelay: 1000 });
    }

    return responseJSON;
  }

  // async teste({ idToken }: { idToken: string }) {
  //   const testeDatabase = await this.cvResumeRepository.find({
  //     relations: { file: { user: { firstLogin: true } } },
  //   });

  //   console.log(testeDatabase);

  //   return await this.firebaseService.verifyIdToken({ idToken });
  // }

  getHello(): string {
    return 'Hello World!';
  }
}
