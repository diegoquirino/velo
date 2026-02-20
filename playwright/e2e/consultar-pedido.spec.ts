import { test, expect } from '@playwright/test';

// AAA - Arrange, Act, Assert
// PAV - Preparar, Agir, Verificar

test('Consultar Pedido Realizado com Sucesso', async ({ page }) => {
  // Arrange
  await page.goto('http://localhost:5173/');
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');
  await page.getByRole('link', { name: 'Consultar Pedido' }).click();
  await expect(page.getByTestId('search-order-id')).toBeVisible();

  // Act
  await page.getByTestId('search-order-id').fill('VLO-I215I0');
  await expect(page.getByTestId('search-order-id')).toHaveValue('VLO-I215I0');
  await page.getByTestId('search-order-button').click();

  // Assert
  await expect(page.getByTestId('order-result-id')).toBeVisible();
  await expect(page.getByTestId('order-result-id')).toContainText('VLO-I215I0');
  await expect(page.getByTestId('order-result-VLO-I215I0')).toBeVisible();
  await expect(page.getByTestId('order-result-VLO-I215I0')).toContainText('R$ 52.500,00');
  await expect(page.getByTestId('order-result-status')).toBeVisible();
  await expect(page.getByTestId('order-result-status')).toContainText('APROVADO');
});