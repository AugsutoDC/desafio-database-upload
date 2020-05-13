import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transectionsRepository = getCustomRepository(TransactionsRepository);

    const checkTransectionExists = await transectionsRepository.findOne(id);

    if (!checkTransectionExists) {
      throw new AppError('Transaction not found.', 404);
    }

    await transectionsRepository.remove(checkTransectionExists);
  }
}

export default DeleteTransactionService;
