import { test, expect } from '@playwright/test';

const ORDER_ID = 'VLO-I215I0';

// AAA - Arrange, Act, Assert
// PAV - Preparar, Agir, Verificar

test('Consultar Pedido Realizado com Sucesso', async ({ page }) => {
  // Arrange
  await page.goto('http://localhost:5173/');
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');
  await page.getByRole('link', { name: 'Consultar Pedido' }).click();
  await expect(page.getByTestId('search-order-id')).toBeVisible();

  // Act
  await page.getByTestId('search-order-id').fill(ORDER_ID);
  await expect(page.getByTestId('search-order-id')).toHaveValue(ORDER_ID);
  await page.getByTestId('search-order-button').click();

  // Assert
  // await expect(page.getByTestId('order-result-id')).toBeVisible();
  // await expect(page.getByTestId('order-result-id')).toContainText(ORDER_ID);
  // await expect(page.getByTestId('order-result-status')).toBeVisible();
  // await expect(page.getByTestId('order-result-status')).toContainText('APROVADO');
  await expect(page.getByTestId(`order-result-${ORDER_ID}`)).toBeVisible();
  await expect(page.getByTestId(`order-result-${ORDER_ID}`)).toContainText(ORDER_ID);
  await expect(page.getByTestId(`order-result-${ORDER_ID}`)).toContainText('APROVADO');

});